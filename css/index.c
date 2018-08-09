@bgc : background-color:none;
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
html,
body {
  font-family: 'Roboto', sans-serif;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: 'Indie Flower', cursive;
}
h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3.2rem;
  padding-bottom: 10px;
}
h4 {
  font-size: 2.5rem;
  padding-bottom: 10px;
}
p {
  line-height: 1.5;
  font-size: 1.6rem;
  padding-bottom: 10px;
}
img {
  max-width: 100%;
  height: auto;
}
.container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: dashed 2px #C0C0C0;
  align-self: center;
  height: 100px;
}
.navbar .nav-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}
.navbar .navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
}
.navbar .navigation li {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}
.footer {
  width: 100%;
  border-top: 2px dashed silver;
  background: #FFEBCD;
}
.footer p {
  text-align: center;
  color: #212529;
  font-size: 1.6rem;
  padding: 20px;
}
.home header {
  display: flex;
  justify-content: center;
  width: 100%;
}
.home .content-section {
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.home .content-section .text-content {
  width: 48%;
  padding-right: 1%;
}
.home .content-section .img-content {
  width: 48%;
  padding-left: 1%;
}
.home .content-section .img-content img {
  border-radius: 10px;
}
.home .inverse-content {
  padding-bottom: 30px;
  border-bottom: 2px dashed #C0C0C0;
}
.home .inverse-content .text-content {
  padding-left: 1%;
  padding-right: 0;
}
.home .inverse-content .img-content {
  padding-right: 1%;
  padding-left: 0;
}
.home .content-destination {
  width: 75%;
  margin: 0 auto 30px;
}
.home .content-destination img {
  border-radius: 10px;
}
.home .content-pick {
  padding-top: 30px;
  border-top: 2px dashed #C0C0C0;
  display: flex;
  justify-content: space-between;
}
.home .content-pick .destination {
  width: 30%;
  margin-bottom: 30px;
}
.home .content-pick .destination .btn {
  display: flex;
  justify-content: center;
  height: 17%;
  width: 80%;
  border: solid 2px black;
  border-radius: 10px;
  align-items: center;
  font-size: 1.7rem;
  background-color: teal;
  color: white;
  align-self: center;
}
