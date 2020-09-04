function handlePing(req, res) {
    const { "ping-from": pingFrom, "ping-to": pingTo } = req.headers;
    console.log("ping headers", { pingFrom, pingTo });
    console.log("url params", req.query);
    res.json({});
}

module.exports = {
    handlePing,
};
