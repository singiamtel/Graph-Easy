/**
 * Edge cell for grid layout in Graph::Easy.
 *
 * TypeScript port of Graph::Easy::Edge::Cell from the Perl Graph::Easy library
 */

import { Base } from '../Base';

export class Cell extends Base {
  edge_type(): string { throw new Error('Method not implemented: edge_type'); }
  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  arrow_count(): number { throw new Error('Method not implemented: arrow_count'); }
  protected _make_cross(): void { throw new Error('Method not implemented: _make_cross'); }
  protected _make_joint(): void { throw new Error('Method not implemented: _make_joint'); }
  protected _html_edge_hor(): string { throw new Error('Method not implemented: _html_edge_hor'); }
  protected _html_edge_ver(): string { throw new Error('Method not implemented: _html_edge_ver'); }
  protected _html_edge_cross(): string { throw new Error('Method not implemented: _html_edge_cross'); }
  as_html(): string { throw new Error('Method not implemented: as_html'); }
  protected _format_td(content: string, attrs: Record<string, any>): string { throw new Error('Method not implemented: _format_td'); }
  class(): string { throw new Error('Method not implemented: class'); }
  group(): any { throw new Error('Method not implemented: group'); }
  type(): string { throw new Error('Method not implemented: type'); }
  protected _correct_size(): void { throw new Error('Method not implemented: _correct_size'); }
  attribute(name: string): any { throw new Error('Method not implemented: attribute'); }
}
