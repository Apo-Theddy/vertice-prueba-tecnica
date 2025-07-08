import { SetMetadata } from '@nestjs/common';
import { DecoratorKeys } from '../constants/decorator-keys.constant';

export const Public = () => SetMetadata(DecoratorKeys.PUBLIC, true);
