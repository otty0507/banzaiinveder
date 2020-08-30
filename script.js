const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=QSl-iFVncWXotiQb03xeZl8kX7v39Rv2Qvlm-WKW4XFN53JLLrVIx47XYYllxh3hhWL7VhPraDKTyW6HCIXEqH7_oHc0XITcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLEnblhtnYYl6WGFfT3ma0FMI8sjjbCJfxL5LANA_LhV1LEPXBLZOjqcrAGr2lGEy5cdv3aNHr6K&lib=MoGUgZmNVO0EzaTnPiIvmE4yCk3cQEqvu";

new Vue({
  el: "#app",
  data: {
    info: null,
  },

  methods: {
    async updateInfo() {
    const result = await axios.get(url);

    this.info = result.data.sort((a, b) => b.score - a.score);
    },
  },

  created() {
    this.updateInfo();
  },
});
