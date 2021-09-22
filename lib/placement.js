// 在上 top减去偏移量  在下 top加上偏移量  在左 left减去偏移量  在右 left加上偏移量
export var placementOffsetMap = {
    top: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [-ch - offset, rw / 2 - cw / 2];
    },
    topLeft: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [-ch - offset, 0];
    },
    topRight: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [-ch - offset, rw - cw];
    },
    bottom: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [rh + offset, rw / 2 - cw / 2];
    },
    bottomLeft: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [rh + offset, 0];
    },
    bottomRight: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [rh + offset, rw - cw];
    },
    left: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [rh / 2 - ch / 2, -cw - offset];
    },
    leftTop: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [0, -cw - offset];
    },
    leftBottom: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [rh - ch, -cw - offset];
    },
    right: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [rh / 2 - ch / 2, rw + offset];
    },
    rightTop: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [0, rw + offset];
    },
    rightBottom: function (_a) {
        var rw = _a.rw, rh = _a.rh, cw = _a.cw, ch = _a.ch, offset = _a.offset;
        return [rh - ch, rw + offset];
    }
};
//# sourceMappingURL=placement.js.map