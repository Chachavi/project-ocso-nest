import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [ConfigModule.forRoot(), EmployeesModule, ProductsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.host,
    port: 5432,
    username: 'postgres',
    password: process.env.pass,
    database: process.env.database,
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }),
    EmployeesModule,
    ProductsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




