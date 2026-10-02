export default function handler(req, res) {
  res.status(200).json({
    success: true,
    service: "City Market API",
    status: "online"
  });
}
