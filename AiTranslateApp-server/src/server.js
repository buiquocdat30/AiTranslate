const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Kết nối MongoDB thành công');
    app.listen(PORT, () => {
      console.log(`Server đang chạy tại http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Lỗi kết nối MongoDB:', err);
  }); 