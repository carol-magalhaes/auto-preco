import { api } from "./api";

export type VehicleType = "carros" | "motos" | "caminhoes";

export type FipeBrand = {
  nome: string;
  valor: string;
};

export type FipeModel = {
  modelo: string;
  valor: string;
};

export type FipeYear = {
  codigo: string;
  valor: string;
};

export async function getBrands(type: VehicleType): Promise<FipeBrand[]> {
  const response = await api.get<FipeBrand[]>(`/fipe/marcas/v1/${type}`);

  return response.data;
}

export async function getModels(
  type: VehicleType,
  brandCode: string,
): Promise<FipeModel[]> {
  const response = await api.get<FipeModel[]>(
    `fipe/veiculos/v1/${type}/${brandCode}`,
  );

  return response.data;
}

export async function getYears(
  type: VehicleType,
  brandCode: string,
  modelCode: string,
): Promise<FipeYear[]> {
  const response = await api.get<FipeYear[]>(
    `fipe/anos/v1/${type}/${brandCode}/${modelCode}`,
  );

  return response.data;
}
