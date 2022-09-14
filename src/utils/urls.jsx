export const getAllBreedsURL =()=> (
    'https://dog.ceo/api/breeds/list/all'
)

export const getSubBreedsURL =(breeds)=> (
    `https://dog.ceo/api/breed/${breeds}/list`
)


export const getBreedImageURL=(breed)=> (
    `https://dog.ceo/api/breed/${breed}/images`
    
)