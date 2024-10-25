/**
 * https://leetcode.com/problems/regular-expression-matching/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let memo = {};

    function closure(i,j) {
        if(memo[`${i},${j}`] != undefined) {
            return memo[`${i},${j}`];
        }
        if(j >= p.length) {
            memo[`${i},${j}`] = i >= s.length;

            return memo[`${i},${j}`];
        }
        let firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');
    
        if(j <= p.length-2 && p[j+1] === "*") {
            memo[`${i},${j}`] = closure(i, j+2) || (firstMatch && closure(i+1, j));
        } else {
            memo[`${i},${j}`] = firstMatch && closure(i+1, j+1);
        }
        return memo[`${i},${j}`];
    }

    return closure(0,0);
};

// console.log(isMatch('sss', 'sss'));
// console.log(isMatch('sss', '...'));
// console.log(isMatch('sss', '.*'));
// console.log(isMatch('sss', 's*'));
// console.log(isMatch('sadb', 'sadb'));
// console.log(isMatch('sddb', '.*db'));
// console.log(isMatch('sddgb', '.*sddgb'));
// console.log(isMatch('sddgb', '.*ddgb'));
// console.log(isMatch('sddgb', 's.*ddgb'));
// console.log(isMatch('sddgb', 's.*gb'));
// console.log(isMatch('sddbpd', '.*db.*pd'));
// console.log(isMatch('sadb', 'sa*db'));
// console.log(isMatch('saadb', 'sa*db'));
// console.log(isMatch('sdb', 'sa*db'));
// console.log(isMatch('sddbpd', '.*.*.*db.*pd'));
// console.log(isMatch('aaa', 'a*a'));
// console.log(isMatch('aaa', '.*aaa'));
// console.log(isMatch('aaa', 'a*aa'));
// console.log(isMatch('aaa', 'a*aaa'));
// console.log(isMatch('sddbpd', '.*db.*.'));
// console.log(isMatch('d', '.*.'));
// console.log(isMatch('d', '.'));
// console.log(isMatch('aab', 'c*a*b'));
// console.log(isMatch('aab', 'a*b'));
// console.log(isMatch('aabcbcbcaccbcaabc', '.*a*aa*.*b*.c*.*a*'));
console.log(isMatch('aaaaaaaaaaaaaaaaaaab', 'a*a*a*a*a*a*a*a*a*a*'));

// // // console.log('------------------------')
// console.log(isMatch('aaa', 'a*ab'));
// console.log(isMatch('sd', '.*s'));
// console.log(isMatch('sddbpd', '.*sdb.*pd'));
// console.log(isMatch('sdd', '.*db'));
// console.log(isMatch('sddb', '.*db.*pd'));
// console.log(isMatch('sss', 'ss'));
// console.log(isMatch('sss', 's'));
// console.log(isMatch('sss', 'a'));
// console.log(isMatch('sddb', '.db'));
// console.log(isMatch('mississippi', "mis*is*p*."));
// console.log(isMatch('sippi', "s*p*."));
// console.log(isMatch('i', ""));
// console.log(isMatch('a', ".*..a*"));
