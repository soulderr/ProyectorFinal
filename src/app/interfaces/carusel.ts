export interface Carusel {
    id:number,
    titulo: String,
    descripcion:String,
    imagen: String
}

export const CaruselFotos:Array<Carusel>=[
    {
      id:1,
      titulo: "Foto",
      descripcion:"descripcion1",
      imagen:"../../assets/carusel/1.png"
    },
    {
        id:2,
        titulo: "Foto",
        descripcion:"descripcion2",
        imagen:"../../assets/carusel/2.png"
      },
    {
        id:3,
        titulo: "Foto",
        descripcion:"descripcion3",
        imagen:"../../assets/carusel/3.png"
    },
]
