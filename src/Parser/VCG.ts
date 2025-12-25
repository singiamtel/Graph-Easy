/**
 * Parser for VCG/GDL format.
 *
 * TypeScript port of Graph::Easy::Parser::VCG from the Perl Graph::Easy library
 */

import { Parser } from '../Parser';
import { Easy } from '../Easy';

export class VCG extends Parser {
  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  reset(): void { throw new Error('Method not implemented: reset'); }
  protected _vcg_color_map_entry(color: string): string { throw new Error('Method not implemented: _vcg_color_map_entry'); }
  protected _unquote(value: string): string { throw new Error('Method not implemented: _unquote'); }
  protected _match_commented_line(): boolean { throw new Error('Method not implemented: _match_commented_line'); }
  protected _match_multi_line_comment(): boolean { throw new Error('Method not implemented: _match_multi_line_comment'); }
  protected _match_optional_multi_line_comment(): boolean { throw new Error('Method not implemented: _match_optional_multi_line_comment'); }
  protected _match_classname(): string | null { throw new Error('Method not implemented: _match_classname'); }
  protected _match_node(): any { throw new Error('Method not implemented: _match_node'); }
  protected _match_edge(): any { throw new Error('Method not implemented: _match_edge'); }
  protected _match_single_attribute(): [string, any] | null { throw new Error('Method not implemented: _match_single_attribute'); }
  protected _match_class_attribute(): [string, any] | null { throw new Error('Method not implemented: _match_class_attribute'); }
  protected _match_attributes(): Record<string, any> | null { throw new Error('Method not implemented: _match_attributes'); }
  protected _match_graph_attribute(): boolean { throw new Error('Method not implemented: _match_graph_attribute'); }
  protected _clean_attributes(attrs: Record<string, any>): Record<string, any> { throw new Error('Method not implemented: _clean_attributes'); }
  protected _match_group_end(): boolean { throw new Error('Method not implemented: _match_group_end'); }
  protected _match_group_start(): any { throw new Error('Method not implemented: _match_group_start'); }
  protected _clean_line(line: string): string { throw new Error('Method not implemented: _clean_line'); }
  protected _line_insert(line: string): void { throw new Error('Method not implemented: _line_insert'); }
  protected _new_scope(): void { throw new Error('Method not implemented: _new_scope'); }
  protected _edge_style(style: string): string { throw new Error('Method not implemented: _edge_style'); }
  protected _build_match_stack(): void { throw new Error('Method not implemented: _build_match_stack'); }
  protected _new_node(name: string, attrs?: Record<string, any>): any { throw new Error('Method not implemented: _new_node'); }
  protected _remap(attrs: Record<string, any>, mapping: Record<string, string>): Record<string, any> { throw new Error('Method not implemented: _remap'); }
  protected _vertical_order_from_vcg(value: string): string { throw new Error('Method not implemented: _vertical_order_from_vcg'); }
  protected _horizontal_order_from_vcg(value: string): string { throw new Error('Method not implemented: _horizontal_order_from_vcg'); }
  protected _invisible_from_vcg(value: string): string { throw new Error('Method not implemented: _invisible_from_vcg'); }
  protected _manhattan_edges_from_vcg(value: string): string { throw new Error('Method not implemented: _manhattan_edges_from_vcg'); }
  protected _textmode_from_vcg(value: string): string { throw new Error('Method not implemented: _textmode_from_vcg'); }
  protected _edge_color_from_vcg(value: string): string { throw new Error('Method not implemented: _edge_color_from_vcg'); }
  protected _edge_class_from_vcg(value: string): string { throw new Error('Method not implemented: _edge_class_from_vcg'); }
  protected _orientation_from_vcg(value: string): string { throw new Error('Method not implemented: _orientation_from_vcg'); }
  protected _port_sharing_from_vcg(value: string): string { throw new Error('Method not implemented: _port_sharing_from_vcg'); }
  protected _inport_sharing_from_vcg(value: string): string { throw new Error('Method not implemented: _inport_sharing_from_vcg'); }
  protected _outport_sharing_from_vcg(value: string): string { throw new Error('Method not implemented: _outport_sharing_from_vcg'); }
  protected _node_color_from_vcg(value: string): string { throw new Error('Method not implemented: _node_color_from_vcg'); }
  protected _vcg_node_shape(value: string): string { throw new Error('Method not implemented: _vcg_node_shape'); }
  protected _group_name_from_vcg(value: string): string { throw new Error('Method not implemented: _group_name_from_vcg'); }
  protected _remap_attributes(attrs: Record<string, any>): Record<string, any> { throw new Error('Method not implemented: _remap_attributes'); }
  protected _parser_cleanup(): void { throw new Error('Method not implemented: _parser_cleanup'); }
}
