/**
 * Layout repair/fixing for Graph::Easy.
 *
 * TypeScript port of Graph::Easy::Layout::Repair from the Perl Graph::Easy library
 */

export class Repair {
  protected _edges_into_groups(): void { throw new Error('Method not implemented: _edges_into_groups'); }
  protected _repair_nodes(): void { throw new Error('Method not implemented: _repair_nodes'); }
  protected _repair_cell(cell: any): void { throw new Error('Method not implemented: _repair_cell'); }
  protected _splice_edges(): void { throw new Error('Method not implemented: _splice_edges'); }
  protected _new_edge_cell(edge: any, x: number, y: number): any { throw new Error('Method not implemented: _new_edge_cell'); }
  protected _check_edge_cell(cell: any): boolean { throw new Error('Method not implemented: _check_edge_cell'); }
  protected _repair_group_edge(edge: any): void { throw new Error('Method not implemented: _repair_group_edge'); }
  protected _repair_edge(edge: any): void { throw new Error('Method not implemented: _repair_edge'); }
  protected _repair_edges(): void { throw new Error('Method not implemented: _repair_edges'); }
  protected _fill_group_cells(): void { throw new Error('Method not implemented: _fill_group_cells'); }
}
