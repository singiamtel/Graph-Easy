/**
 * Path management for Graph::Easy layout.
 *
 * TypeScript port of Graph::Easy::Layout::Path from the Perl Graph::Easy library
 */

export class Path {
  protected _shuffle_dir(dirs: string[]): string[] { throw new Error('Method not implemented: _shuffle_dir'); }
  protected _shift(direction: string): { dx: number; dy: number } { throw new Error('Method not implemented: _shift'); }
  protected _near_places(x: number, y: number): any[] { throw new Error('Method not implemented: _near_places'); }
  protected _allowed_places(from: any, to: any): any[] { throw new Error('Method not implemented: _allowed_places'); }
  protected _allow(place: any): boolean { throw new Error('Method not implemented: _allow'); }
  protected _clear_tries(): void { throw new Error('Method not implemented: _clear_tries'); }
  protected _placed_shared(node: any): boolean { throw new Error('Method not implemented: _placed_shared'); }
  protected _find_node_place(node: any): any { throw new Error('Method not implemented: _find_node_place'); }
  protected _trace_path(edge: any): any[] { throw new Error('Method not implemented: _trace_path'); }
  protected _create_cell(type: string, x: number, y: number): any { throw new Error('Method not implemented: _create_cell'); }
  protected _path_is_clear(from: any, to: any): boolean { throw new Error('Method not implemented: _path_is_clear'); }
}
