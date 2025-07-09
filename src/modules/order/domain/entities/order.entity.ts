import { Product } from 'src/modules/product/domain/entities/product.entity';
import { User } from 'src/modules/user/domain/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderDetail } from './order-detail.entity';

@Entity({ name: 'Orders' })
export class Order {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({
    name: 'total_amount',
    type: 'decimal',
    nullable: false,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
    default: 0,
  })
  totalAmount: number;

  @Column({
    name: 'shipping_address',
    type: 'text',
    nullable: false,
  })
  shippingAddress: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order, {
    cascade: true,
    eager: true,
  })
  orderDetails: OrderDetail[];
}
