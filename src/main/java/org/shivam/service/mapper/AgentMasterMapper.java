package org.shivam.service.mapper;

import org.shivam.domain.*;
import org.shivam.service.dto.AgentMasterDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity AgentMaster and its DTO AgentMasterDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface AgentMasterMapper extends EntityMapper<AgentMasterDTO, AgentMaster> {


}
