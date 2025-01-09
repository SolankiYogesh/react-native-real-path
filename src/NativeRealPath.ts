import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getPath(path: string): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RealPath');
