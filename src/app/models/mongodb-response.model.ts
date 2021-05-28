export interface UpdateWriteOpResult {
    result: { ok: number; n: number; nModified: number };
    connection: any;
    matchedCount: number;
    modifiedCount: number;
    upsertedCount: number;
    upsertedId: any;
}