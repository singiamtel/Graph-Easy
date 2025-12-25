/**
 * Anonymous group for Graph::Easy.
 *
 * TypeScript port of Graph::Easy::Group::Anon from the Perl Graph::Easy library
 */

import { Group } from '../Group';

export class Anon extends Group {
  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  protected _correct_size(): void { throw new Error('Method not implemented: _correct_size'); }
  attributes_as_txt(): string { throw new Error('Method not implemented: attributes_as_txt'); }
  as_pure_txt(): string { throw new Error('Method not implemented: as_pure_txt'); }
  protected _as_part_txt(): string { throw new Error('Method not implemented: _as_part_txt'); }
  as_graphviz_txt(): string { throw new Error('Method not implemented: as_graphviz_txt'); }
  text_styles_as_css(): string { throw new Error('Method not implemented: text_styles_as_css'); }
  is_anon(): boolean { throw new Error('Method not implemented: is_anon'); }
}
