export class Queries {
  constructor(data: any) {}

  static insert(data: any) {
    return `INSERT INTO recepies Set ?`;
  }
}

// export const insert = `INSERT INTO recepies Set ?`;
