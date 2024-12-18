import { useGetProductField } from "@/api/products";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ResponseType } from "@/types/filter";
import React from "react";

function FilterOrigin({ onChange }: { onChange: (value: string) => void }) {
  const { result, loading }: ResponseType = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>
      {loading && result === null ? (
        <p>Cargando origen...</p>
      ) : (
        <RadioGroup onValueChange={(value) => onChange(value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={"all"} id="all" />
            <Label htmlFor="all">Ver todos</Label>
          </div>
          {result !== null &&
            result.schema.attributes.productOrigin.enum.map((origin) => (
              <div key={origin} className="flex items-center space-x-2">
                <RadioGroupItem value={origin} id={origin} />
                <Label htmlFor={origin}>{origin}</Label>
              </div>
            ))}
        </RadioGroup>
      )}
    </div>
  );
}

export default FilterOrigin;
