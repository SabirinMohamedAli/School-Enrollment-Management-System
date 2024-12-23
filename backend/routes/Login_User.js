// Route: Login User
router.post(
    "/login",
    [
      check("email", "Please include a valid email").isEmail(),
      check("password", "Password is required").exists(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
  
      try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ msg: "Invalid credentials" });
        }
  
        // Match password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ msg: "Invalid credentials" });
        }
  
        // Generate JWT
        const payload = { user: { id: user.id, role: user.role } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
  
        res.json({ token });
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
    }
  );
  
  module.exports = router;
  