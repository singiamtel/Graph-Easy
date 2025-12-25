/**
 * Parser for Graphviz DOT format.
 *
 * TypeScript port of Graph::Easy::Parser::Graphviz from the Perl Graph::Easy library
 */

import { Parser } from '../Parser';
import { Easy } from '../Easy';

export class Graphviz extends Parser {
  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  reset(): void { throw new Error('Method not implemented: reset'); }
  protected _unquote_attribute(value: string): string { throw new Error('Method not implemented: _unquote_attribute'); }
  protected _unquote(value: string): string { throw new Error('Method not implemented: _unquote'); }
  protected _clean_line(line: string): string { throw new Error('Method not implemented: _clean_line'); }
  protected _line_insert(line: string): void { throw new Error('Method not implemented: _line_insert'); }
  protected _match_boolean(): boolean | null { throw new Error('Method not implemented: _match_boolean'); }
  protected _match_comment(): boolean { throw new Error('Method not implemented: _match_comment'); }
  protected _match_multi_line_comment(): boolean { throw new Error('Method not implemented: _match_multi_line_comment'); }
  protected _match_optional_multi_line_comment(): boolean { throw new Error('Method not implemented: _match_optional_multi_line_comment'); }
  protected _match_name(): string | null { throw new Error('Method not implemented: _match_name'); }
  protected _match_node(): any { throw new Error('Method not implemented: _match_node'); }
  protected _match_group_start(): any { throw new Error('Method not implemented: _match_group_start'); }
  protected _match_pseudo_group_start_at_beginning(): any { throw new Error('Method not implemented: _match_pseudo_group_start_at_beginning'); }
  protected _match_pseudo_group_start(): any { throw new Error('Method not implemented: _match_pseudo_group_start'); }
  protected _match_group_end(): boolean { throw new Error('Method not implemented: _match_group_end'); }
  protected _match_edge(): any { throw new Error('Method not implemented: _match_edge'); }
  protected _match_html_regexps(): string[] { throw new Error('Method not implemented: _match_html_regexps'); }
  protected _match_html(): string | null { throw new Error('Method not implemented: _match_html'); }
  protected _match_single_attribute(): [string, any] | null { throw new Error('Method not implemented: _match_single_attribute'); }
  protected _match_special_attribute(): [string, any] | null { throw new Error('Method not implemented: _match_special_attribute'); }
  protected _match_attributes(): Record<string, any> | null { throw new Error('Method not implemented: _match_attributes'); }
  protected _match_graph_attribute(): boolean { throw new Error('Method not implemented: _match_graph_attribute'); }
  protected _match_optional_attributes(): Record<string, any> | null { throw new Error('Method not implemented: _match_optional_attributes'); }
  protected _clean_attributes(attrs: Record<string, any>): Record<string, any> { throw new Error('Method not implemented: _clean_attributes'); }
  protected _new_scope(): void { throw new Error('Method not implemented: _new_scope'); }
  protected _add_group_match(group: any): void { throw new Error('Method not implemented: _add_group_match'); }
  protected _edge_style(style: string): string { throw new Error('Method not implemented: _edge_style'); }
  protected _new_nodes(names: string[]): any[] { throw new Error('Method not implemented: _new_nodes'); }
  protected _build_match_stack(): void { throw new Error('Method not implemented: _build_match_stack'); }
  protected _add_node(name: string, attrs?: Record<string, any>): any { throw new Error('Method not implemented: _add_node'); }
  protected _remap(attrs: Record<string, any>, mapping: Record<string, string>): Record<string, any> { throw new Error('Method not implemented: _remap'); }
  protected _from_graphviz_graph_rankdir(value: string): string { throw new Error('Method not implemented: _from_graphviz_graph_rankdir'); }
  protected _from_graphviz_node_shape(value: string): string { throw new Error('Method not implemented: _from_graphviz_node_shape'); }
  protected _from_graphviz_style(value: string): string { throw new Error('Method not implemented: _from_graphviz_style'); }
  protected _from_graphviz_node_orientation(value: string): string { throw new Error('Method not implemented: _from_graphviz_node_orientation'); }
  protected _from_graphviz_headport(value: string): string { throw new Error('Method not implemented: _from_graphviz_headport'); }
  protected _from_graphviz_tailport(value: string): string { throw new Error('Method not implemented: _from_graphviz_tailport'); }
  protected _from_graphviz_node_peripheries(value: string): string { throw new Error('Method not implemented: _from_graphviz_node_peripheries'); }
  protected _from_graphviz_edge_minlen(value: string): string { throw new Error('Method not implemented: _from_graphviz_edge_minlen'); }
  protected _from_graphviz_font_size(value: string): string { throw new Error('Method not implemented: _from_graphviz_font_size'); }
  protected _from_graphviz_labelloc(value: string): string { throw new Error('Method not implemented: _from_graphviz_labelloc'); }
  protected _from_graphviz_edge_dir(value: string): string { throw new Error('Method not implemented: _from_graphviz_edge_dir'); }
  protected _from_graphviz_edge_style(value: string): string { throw new Error('Method not implemented: _from_graphviz_edge_style'); }
  protected _from_graphviz_arrow_style(value: string): string { throw new Error('Method not implemented: _from_graphviz_arrow_style'); }
  protected _from_graphviz_color(value: string): string { throw new Error('Method not implemented: _from_graphviz_color'); }
  protected _from_graphviz_edge_color(value: string): string { throw new Error('Method not implemented: _from_graphviz_edge_color'); }
  protected _from_graphviz_graph_labeljust(value: string): string { throw new Error('Method not implemented: _from_graphviz_graph_labeljust'); }
  protected _remap_attributes(attrs: Record<string, any>): Record<string, any> { throw new Error('Method not implemented: _remap_attributes'); }
  protected _parse_html_attributes(html: string): Record<string, any> { throw new Error('Method not implemented: _parse_html_attributes'); }
  protected _html_per_table(html: string): any { throw new Error('Method not implemented: _html_per_table'); }
  protected _html_per_node(html: string): any { throw new Error('Method not implemented: _html_per_node'); }
  protected _parse_html(html: string): any { throw new Error('Method not implemented: _parse_html'); }
  protected _parser_cleanup(): void { throw new Error('Method not implemented: _parser_cleanup'); }
}
