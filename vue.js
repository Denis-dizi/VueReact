// (:56:)W10D3

// (1:18:)W10D3 component with parametrs
Vue.component('my-btn2', {
    props: {
        text: {
            type: String,
            default: 'default'
        }
    },
    methods: {
        clickBtn: function() {
            console.log("You've cliced btn with text: " + this.text);
        }
    },
    template: `
    <span>
        <button v-on:click="clickBtn">{{ text }}</button>
    </span>
    `
});

// (1:14:)W10D3 static component
Vue.component('my-btn1', {
    template: `
    <span>
        <button>Text inside of component</button>
    </span>
    `
});

// (1:02:)W10D3
new Vue({
    el: '#vue-wrapper',
    data: {
        text: "This is text from Vue instance",
        clickCount: 0
    },
    // (1:09:)W10D3
    methods: {
        addOne: function () {
            this.clickCount++;
            console.log("clicked +");
        },
        removeOne: function () {
            this.clickCount--;
            console.log("clicked -");
            // this.clickCount -= 1;
            // this.clickCount = this.clickCount -1;
        }
    }
})