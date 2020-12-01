// (:56:)W10D3
// (1:02:)W10D3
new Vue({
    el: '#vue-wrapper',
    data: {
        text: "This is text from Vue instance",
        clickCount: 0
    },
    // (1:09:)
    methods: {
        addOne: function()  {
            this.clickCount++;
            console.log("clicked +");
        },
        removeOne: function()  {
            this.clickCount--;
            console.log("clicked -");
            // this.clickCount -= 1;
            // this.clickCount = this.clickCount -1;
        }
    }
})