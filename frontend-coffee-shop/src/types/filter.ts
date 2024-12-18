export type Schema = {
  schema: {
    attributes: {
      productOrigin: {
        enum: string[];
      };
    };
  };
};

export interface ResponseType {
  result: Schema | null;
  loading: boolean;
  error: string;
}
