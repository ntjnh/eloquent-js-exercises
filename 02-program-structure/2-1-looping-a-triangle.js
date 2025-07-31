/* Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

let pyramid = ''

for (let i = 0; i < 7; i++) {
    while (pyramid.length < 7) {
        pyramid += '#'
        console.log(pyramid)
    }
}
