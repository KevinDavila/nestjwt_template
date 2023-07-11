import { Test, TestingModule } from '@nestjs/testing';
import { CyberpuertaController } from './cyberpuerta.controller';

describe('CyberpuertaController', () => {
  let controller: CyberpuertaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CyberpuertaController],
    }).compile();

    controller = module.get<CyberpuertaController>(CyberpuertaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
