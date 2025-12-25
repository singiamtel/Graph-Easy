/**
 * Group cell for grid layout in Graph::Easy.
 *
 * TypeScript port of Graph::Easy::Group::Cell from the Perl Graph::Easy library
 */

import { Base } from '../Base';

export class Cell extends Base {
  protected _css(): string { throw new Error('Method not implemented: _css'); }
  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  protected _set_type(type: string): void { throw new Error('Method not implemented: _set_type'); }
  protected _set_label(label: string): void { throw new Error('Method not implemented: _set_label'); }
  shape(value?: string): string { throw new Error('Method not implemented: shape'); }
  attribute(name: string): any { throw new Error('Method not implemented: attribute'); }
  as_ascii(): string { throw new Error('Method not implemented: as_ascii'); }
  class(): string { throw new Error('Method not implemented: class'); }
  protected _correct_size(): void { throw new Error('Method not implemented: _correct_size'); }
}
