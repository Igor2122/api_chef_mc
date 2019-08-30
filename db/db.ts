import pgPromise from 'pg-promise';

export const pgp = pgPromise();

const devUrl = 'postgres://tourdb_admin:a@Asadaf5@localhost:5432/tourdb';

export const db = pgp(process.env.DATABASE_URL || devUrl);
