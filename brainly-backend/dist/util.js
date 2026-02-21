export function random(len) {
    const str = "qwerfdgvaxojnktynpb23547921m";
    const n = str.length;
    let value = "";
    for (let i = 0; i < n; i++) {
        value += str[Math.floor((Math.random() * n))];
    }
    return value;
}
//# sourceMappingURL=util.js.map