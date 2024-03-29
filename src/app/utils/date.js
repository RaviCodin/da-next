export const getDate = (d) =>{
    const date = new Date(d)
     const dateA = date.toString().split(' ');

     return `${dateA[2]} ${dateA[1]} ${dateA[3]}`


}

export const getDateTime = (d) =>{
    const date = new Date(d)
     const dateA = date.toString().split(' ');

     return `${dateA[2]} ${dateA[1]} ${dateA[3]} ${dateA[4]}`


}