/**
 * Pathfinding algorithm for Graph::Easy layout.
 *
 * TypeScript port of Graph::Easy::Layout::Scout from the Perl Graph::Easy library
 */

export class Scout {
  protected _end_points(): any[] { throw new Error('Method not implemented: _end_points'); }
  protected _find_path(from: any, to: any): any[] { throw new Error('Method not implemented: _find_path'); }
  protected _find_path_loop(from: any, to: any): any[] { throw new Error('Method not implemented: _find_path_loop'); }
  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  add(element: any): void { throw new Error('Method not implemented: add'); }
  elements(): any[] { throw new Error('Method not implemented: elements'); }
  extract_top(): any { throw new Error('Method not implemented: extract_top'); }
  delete(element: any): void { throw new Error('Method not implemented: delete'); }
  sort_sub(a: any, b: any): number { throw new Error('Method not implemented: sort_sub'); }
  protected _astar_modifier(): number { throw new Error('Method not implemented: _astar_modifier'); }
  protected _astar_distance(from: any, to: any): number { throw new Error('Method not implemented: _astar_distance'); }
  protected _astar_edge_type(from: any, to: any): string { throw new Error('Method not implemented: _astar_edge_type'); }
  protected _astar_near_nodes(node: any): any[] { throw new Error('Method not implemented: _astar_near_nodes'); }
  protected _astar_boundaries(): any { throw new Error('Method not implemented: _astar_boundaries'); }
  protected _get_joints(path: any[]): any[] { throw new Error('Method not implemented: _get_joints'); }
  protected _join_edge(edge: any): void { throw new Error('Method not implemented: _join_edge'); }
  protected _find_path_astar(from: any, to: any): any[] { throw new Error('Method not implemented: _find_path_astar'); }
  protected _astar(from: any, to: any): any[] { throw new Error('Method not implemented: _astar'); }
  protected _straighten_path(path: any[]): any[] { throw new Error('Method not implemented: _straighten_path'); }
  protected _map_as_html(): string { throw new Error('Method not implemented: _map_as_html'); }
}
