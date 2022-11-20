export type id = string;

export interface Data<T> {
    getAll: () => Promise<Array<T>>;
    get?: (id: id) => Promise<T>;
    create: (data: Partial<T>) => Promise<T>;
    update: (data: Partial<T>) => Promise<T>;
    delete: (id: string) => Promise<void>;
}
