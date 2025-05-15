import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditAnalysisModule } from './modules/credit-analysis.module';

@Module({
  imports: [CreditAnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
