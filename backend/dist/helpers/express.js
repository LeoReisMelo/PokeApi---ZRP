"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Server = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class Server {
  constructor() {
    this.app = (0, _express.default)();
    this.app.use((0, _cors.default)());
    this.app.use((0, _helmet.default)());
    this.app.use(_express.default.json());
  }
  init(routes = []) {
    routes.forEach(route => {
      const middlewares = route.middlewares || [];

      // @ts-ignore
      this.app[route.method.toLocaleLowerCase()](route.path, middlewares, route.handler);
    });
    this.app.all('*', (_, res) => res.sendStatus(404));
    this.app.listen(3333, () => console.log('Application is running on port 3333'));
    return this.app;
  }
}
exports.Server = Server;
//# sourceMappingURL=express.js.map