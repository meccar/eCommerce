import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DBModule } from "@app/common";

@Module({
  imports: [DBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
