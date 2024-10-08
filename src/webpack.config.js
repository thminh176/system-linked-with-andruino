const path = require('path');

module.exports = {
  // Các cấu hình khác
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Cấu hình middleware của bạn ở đây
      return middlewares;
    },
    // Các tùy chọn khác
  },
};
