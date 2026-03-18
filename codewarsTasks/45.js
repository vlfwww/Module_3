name = 'The Window';

let alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return () =>{
            return this.name;
        };
    }
};

// name = 'The Window';

// let alpha = {
//     name : 'My Alpha',
//     getNameFunc : function() {
//         return function() {
//             return this.name;
//         }.bind(this);
//     }
// };

// name = 'The Window';

// let alpha = {
//     name : 'My Alpha',
//     getNameFunc : function() {
//         let self = this;
//         return function() {
//             return self.name;
//         };
//     }
// };
