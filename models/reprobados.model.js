import { Schema, model } from "mongoose";

 export const EsquemaReprobados = new Schema({
    name: String,
    apepat:String,
    Matricula: String
})

export const modeloReprobados = new model("Tabla de reprobados", EsquemaReprobados)

