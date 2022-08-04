/**
 * Given a linked list, such that each node contains an additional random pointer which could point to any node in the list, or null, make a deep copy of the list and return the head node of the new copy. If you need to look up details about a deep copy, check
 *
 * https://click.pstmrk.it/2sm/www.cs.utexas.edu%2F~scottm%2Fcs307%2Fhandouts%2FdeepCopying.htm/g90scS8N/bP1H/3btCM96Av_/OTg0MTcyMmMtMTRmNi00NTVlLWE3MjMtOTMwZTRkNzQwODA2
 *  https://click.pstmrk.it/2sm/developer.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FDeep_copy/hN0scS8N/bP1H/fbuTsUKmJe/OTg0MTcyMmMtMTRmNi00NTVlLWE3MjMtOTMwZTRkNzQwODA2
 *  */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.random = null;
	}
}
