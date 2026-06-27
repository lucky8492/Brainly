import dns from "node:dns/promises";
const result = await dns.resolveSrv("_mongodb._tcp.cluster0.ufbwlqr.mongodb.net");
console.log(result);