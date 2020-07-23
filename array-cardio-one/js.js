const arr = ['yamin,hoqe', 'forbar,jahan', 'victimise,foredoes', 'foredoes,votarist', 'votarist,uncategorised', 'uncategorised,grub-time', 'grub-time,astringence', 'astringence,pyrethrin', 'pyrethrin,birdstrikes', 'birdstrikes,wonderwork', 'wonderwork,telinga', 'telinga,annunciating', 'annunciating,pronuclear', 'pronuclear,roadbook', 'roadbook,clankingly', 'clankingly,ox-antelope', 'ox-antelope,auxiliary', 'auxiliary,hit-by-pitch', 'hit-by-pitch,polianthes', 'polianthes,srbija', 'srbija,unblemishable'];
const arr2 = [{'LTP': 59, 'EPS': 80, 'change': 88, 'last': 'madden', 'first': 'benteke'}, {'LTP': 62, 'EPS': 60, 'change': 81, 'last': 'madden', 'first': 'yamin'}, {'LTP': 50, 'EPS': 74, 'change': 53, 'last': 'ragge', 'first': 'yamin'}, {'LTP': 93, 'EPS': 63, 'change': 71, 'last': 'finzu', 'first': 'yamin'}, {'LTP': 46, 'EPS': 91, 'change': 61, 'last': 'zulker', 'first': 'yamin'}, {'LTP': 74, 'EPS': 75, 'change': 60, 'last': 'zulker', 'first': 'yamin'}, {'LTP': 79, 'EPS': 92, 'change': 89, 'last': 'fati', 'first': 'lena'}];

// const filter1 = arr2.filter(function(val){
//     if(val.change >60 && val.LTP <97){
//         return true;}});
const filter1 = arr2.filter(val =>(val.change > 60 
    && val.LTP <97));
console.table(filter1);

const map1 = filter1.map( val =>`${val.first} ${val.last}`);
console.table(map1);

// const sort1 = arr2.sort(function(a,b){
//     if(a.change > b.change)
//     {return 1;}
//     else {return -1}});
const sort1 = arr2.sort((a,b)=>(a.change > b.change) ? 1 : -1);
console.table(sort1);

//No need to use for loop
const totalchange = arr2.reduce((total,val) =>{
    return total + (val.EPS + val.LTP);
},0);  //zero is the inital value of totalchange
console.log(totalchange);

const sort2 = arr2.sort((a,b)=>(a.LTP - a.EPS > b.LTP - b.EPS) ? 1 :-1);
console.table(sort2);

//done in the console of https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll('a'));
// const  de = links 
//             .map(val => val.textcontent)
//             .filter(val1  => val1.includes("city"));
// console.log(de);

//sort people alphabetically by last name 
const names = arr.sort((last,next) => {
    const [afirst , alast] = last.split(',');
    const [bfirst , blast] = next.split(',');
    return alast > blast ? 1 :-1;
});
console.log(names);

const data = ['car','barer','car','car','car','car','trus','trus'];
const reduce2 = data.reduce((ans, item_array) => {
    if(!ans[item_array]) {
        ans[item_array] =0;
    }
    ans[item_array]++;
    return ans;
},[]);
console.log(reduce2);  //output : [ car: 5, barer: 1, trus: 2 ]