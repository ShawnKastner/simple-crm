export class Deal {
    topic!: string;
    user!: string;
    amount!: number;


    constructor(obj?: any) {
        this.topic = obj ? obj.name: '';
        this.user = obj ? obj.user : '';
        this.amount = obj ? obj.amount : '';
    }

    public toJSON() {
        return {
            topic: this.topic,
            user: this.user,
            amount: this.amount,
        }
    };
}