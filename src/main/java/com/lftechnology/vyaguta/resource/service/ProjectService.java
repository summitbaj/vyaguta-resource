package com.lftechnology.vyaguta.resource.service;

import java.time.LocalDate;
import java.util.Map;
import java.util.UUID;

import com.lftechnology.vyaguta.commons.service.CrudService;
import com.lftechnology.vyaguta.resource.entity.Project;

/**
 * 
 * @author Achyut Pokhrel <achyutpokhrel@lftechnology.com>
 *
 */
public interface ProjectService extends CrudService<Project, UUID> {

    Map<String, Object> findResourceUtilization(LocalDate date);
}
