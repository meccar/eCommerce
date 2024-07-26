import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  ModelDefinition,
  MongooseModule,
  MongooseModuleOptions,
} from "@nestjs/mongoose";
import { ConfigModule } from "../config/index";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): MongooseModuleOptions =>
        ({
          uri: configService.get<string>("MONGODB_URI"),
        }) as MongooseModuleOptions,
      inject: [ConfigService],
    }),
  ],
})
export class DBModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
