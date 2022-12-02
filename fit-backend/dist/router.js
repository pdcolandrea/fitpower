"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
var server_1 = require("@trpc/server");
var zod_1 = require("zod");
var t = server_1.initTRPC.create();
var publicProcedure = t.procedure;
var router = t.router;
var helloRouter = router({
    greeting: publicProcedure
        .input(zod_1.z.object({ name: zod_1.z.string() }).nullish())
        .query(function (_a) {
        var _b;
        var input = _a.input;
        return "Hello ".concat((_b = input === null || input === void 0 ? void 0 : input.name) !== null && _b !== void 0 ? _b : "World");
    }),
});
exports.appRouter = router({
    hello: helloRouter,
});
//# sourceMappingURL=router.js.map