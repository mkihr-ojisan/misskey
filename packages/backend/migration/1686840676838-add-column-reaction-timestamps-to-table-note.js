export class AddColumnReactionTimestampsToTableNote1686840676838 {
    name = 'AddColumnReactionTimestampsToTableNote1686840676838'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note" ADD "reactionTimestamps" jsonb NOT NULL DEFAULT '{}'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "reactionTimestamps"`);
    }
}
