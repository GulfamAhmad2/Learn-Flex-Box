const flex = document.querySelector(".dis-flex"),
box = document.querySelector(".box"),

/* =========== Flex direction =========== */
row = document.querySelector(".row"),
rowReverse = document.querySelector(".row-reverse"),
column = document.querySelector(".column"),
columnReverse = document.querySelector(".column-reverse"),

/* =========== Flex wrap =========== */
nowrap = document.querySelector(".nowrap"),
wrapReverse = document.querySelector(".wrap-reverse"),
wrap = document.querySelector(".wrap"),

/* =========== Justify-content =========== */
flexStart = document.querySelector(".flex-start"),
JustifyCenter = document.querySelector(".center"),
spaceBetween = document.querySelector(".space-between"),
spaceAround = document.querySelector(".space-around"),
spaceEvenly = document.querySelector(".space-evenly"),
flexEnd = document.querySelector(".flex-end"),

/* =========== Align Items =========== */
alignStart = document.querySelector(".align-flex-start"),
alignEnd = document.querySelector(".align-flex-end"),
alignCenter = document.querySelector(".align-center"),
alignStretch = document.querySelector(".align-stretch"),
alignBaseline = document.querySelector(".align-baseline"),

/* =========== Align Content =========== */
alignContentStart = document.querySelector(".align-content-flex-start"),
alignContentEnd = document.querySelector(".align-content-flex-end"),
alignContentCenter = document.querySelector(".align-content-center"),
alignContentStretch = document.querySelector(".align-content-stretch"),
alignContentSpaceBetween = document.querySelector(".align-content-space-between"),
alignContentSpaceAround = document.querySelector(".align-content-space-around");



flex.addEventListener("click", () =>{
    box.classList.toggle("flex-items")
})

/* =========== Flex direction =========== */

row.addEventListener("click", () => {
    box.classList.toggle("flex-row")
    box.classList.remove("flex-column")
    box.classList.remove("flex-column-reverse")

    
})

rowReverse.addEventListener("click", () => {
    box.classList.toggle("flex-row-reverse")
    box.classList.remove("flex-column")
    box.classList.remove("flex-column-reverse")
})

column.addEventListener("click", () => {
    box.classList.toggle("flex-column")
    box.classList.remove("flex-row")
    box.classList.remove("flex-row-reverse")
})

columnReverse.addEventListener("click", () => {
    box.classList.toggle("flex-column-reverse")
    box.classList.remove("flex-row")
    box.classList.remove("flex-row-reverse")
})


/* =========== Flex wrap =========== */
nowrap.addEventListener("click", () => {
    box.classList.toggle("nowrap")
    box.classList.remove("wrap")
    box.classList.remove("wrap-reverse")
})

wrapReverse.addEventListener("click", () => {
    box.classList.toggle("wrap-reverse")
    box.classList.remove("nowrap")
    box.classList.remove("wrap")
})

wrap.addEventListener("click", () => {
    box.classList.toggle("wrap")
    box.classList.remove("wrap-reverse")
    box.classList.remove("nowrap")
})

/* =========== Justify-content =========== */

flexStart.addEventListener("click", () =>{
    box.classList.toggle("flex-start")
    box.classList.remove("flex-end")
    box.classList.remove("justify-center")
    box.classList.remove("justify-space-between")
    box.classList.remove("justify-space-around")
    box.classList.remove("justify-space-evenly")

})

flexEnd.addEventListener("click", () =>{
    box.classList.toggle("flex-end")
    box.classList.remove("justify-center")
    box.classList.remove("justify-space-between")
    box.classList.remove("justify-space-around")
    box.classList.remove("justify-space-evenly")
    box.classList.remove("flex-start")

})

JustifyCenter.addEventListener("click", () =>{
    box.classList.toggle("justify-center")
    box.classList.remove("justify-space-between")
    box.classList.remove("justify-space-around")
    box.classList.remove("justify-space-evenly")
    box.classList.remove("flex-start")
    box.classList.remove("flex-end")

})

spaceBetween.addEventListener("click", () =>{
    box.classList.toggle("justify-space-between")
    box.classList.remove("justify-space-around")
    box.classList.remove("justify-space-evenly")
    box.classList.remove("flex-start")
    box.classList.remove("flex-end")
    box.classList.remove("justify-center")

})

spaceAround.addEventListener("click", () =>{
    box.classList.toggle("justify-space-around")
    box.classList.remove("justify-space-evenly")
    box.classList.remove("flex-start")
    box.classList.remove("flex-end")
    box.classList.remove("justify-center")
    box.classList.remove("justify-space-between")


})

spaceEvenly.addEventListener("click", () =>{
    box.classList.toggle("justify-space-evenly")
    box.classList.remove("flex-start")
    box.classList.remove("flex-end")
    box.classList.remove("justify-center")
    box.classList.remove("justify-space-between")
    box.classList.remove("justify-space-around")

})

/* =========== Align Items =========== */
alignStart.addEventListener("click", () =>{
    box.classList.toggle("align-start")
    box.classList.remove("align-end")
    box.classList.remove("align-center")
    box.classList.remove("align-stretch")
    box.classList.remove("align-baseline")

})
alignEnd.addEventListener("click", () =>{
    box.classList.toggle("align-end")
    box.classList.remove("align-start")
    box.classList.remove("align-center")
    box.classList.remove("align-stretch")
    box.classList.remove("align-baseline")
})
alignCenter.addEventListener("click", () =>{
    box.classList.toggle("align-center")
    box.classList.remove("align-end")
    box.classList.remove("align-start")
    box.classList.remove("align-stretch")
    box.classList.remove("align-baseline")
    
})
alignStretch.addEventListener("click", () =>{
    box.classList.toggle("align-stretch")
    box.classList.remove("align-center")
    box.classList.remove("align-end")
    box.classList.remove("align-start")
    box.classList.remove("align-baseline")
})
alignBaseline.addEventListener("click", () =>{
    box.classList.toggle("align-baseline")
    box.classList.remove("align-stretch")
    box.classList.remove("align-center")
    box.classList.remove("align-end")
    box.classList.remove("align-start")
    
})

/* =========== Align Content =========== */
alignContentStart.addEventListener("click", () =>{
    box.classList.toggle("align_Content_Start")
    box.classList.remove("align_Content_End")
    box.classList.remove("align_Content_Center")
    box.classList.remove("align_Content_Stretch")
    box.classList.remove("align_Content_Space_Between")
    box.classList.remove("align_Content_Space_Around")

})

alignContentEnd.addEventListener("click", () =>{
    box.classList.toggle("align_Content_End")
    box.classList.remove("align_Content_Start")
    box.classList.remove("align_Content_Center")
    box.classList.remove("align_Content_Stretch")
    box.classList.remove("align_Content_Space_Between")
    box.classList.remove("align_Content_Space_Around")
})

alignContentCenter.addEventListener("click", () =>{
    box.classList.toggle("align_Content_Center")
    box.classList.remove("align_Content_End")
    box.classList.remove("align_Content_Start")
    box.classList.remove("align_Content_Stretch")
    box.classList.remove("align_Content_Space_Between")
    box.classList.remove("align_Content_Space_Around")
})

alignContentStretch.addEventListener("click", () =>{
    box.classList.toggle("align_Content_Stretch")
    box.classList.remove("align_Content_Center")
    box.classList.remove("align_Content_End")
    box.classList.remove("align_Content_Start")
    box.classList.remove("align_Content_Space_Between")
    box.classList.remove("align_Content_Space_Around")
})

alignContentSpaceBetween.addEventListener("click", () =>{
    box.classList.toggle("align_Content_Space_Between")
    box.classList.remove("align_Content_Stretch")
    box.classList.remove("align_Content_Center")
    box.classList.remove("align_Content_End")
    box.classList.remove("align_Content_Start")
    box.classList.remove("align_Content_Space_Around")
})

alignContentSpaceAround.addEventListener("click", () =>{
    box.classList.toggle("align_Content_Space_Around")
    box.classList.remove("align_Content_Space_Between")
    box.classList.remove("align_Content_Stretch")
    box.classList.remove("align_Content_Center")
    box.classList.remove("align_Content_End")
    box.classList.remove("align_Content_Start")
})




