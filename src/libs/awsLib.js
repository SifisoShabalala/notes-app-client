import { Storage } from "aws-amplify";

export async function s3Upload(file) {
    const fileName = `${Date.now()}-${file.name}`;

    const stored = await Storage.vault.put(fileName, file, {
        contentType: file.type
    });

    return stored.key;
}

export async function s3Delete(file) {
    const fileName = `${Date.now()}-${file.name}`;

    const deleted = await Storage.vault.remove(fileName, {
        contentType: file.type
    });

    return deleted;
}