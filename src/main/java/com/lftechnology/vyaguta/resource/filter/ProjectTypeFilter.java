package com.lftechnology.vyaguta.resource.filter;

import com.lftechnology.vyaguta.commons.jpautil.CommonFilter;
import com.lftechnology.vyaguta.commons.jpautil.Filterable;
import com.lftechnology.vyaguta.resource.common.CommonConstant;
import com.lftechnology.vyaguta.resource.entity.ProjectType;

/**
 * 
 * @author Achyut Pokhrel <achyutpokhrel@lftechnology.com>
 *
 */
public class ProjectTypeFilter extends CommonFilter<ProjectType>implements Filterable<ProjectType> {

    public ProjectTypeFilter() {
        filterBy(CommonConstant.TITLE);
        searchByField("q", CommonConstant.TITLE);
    }

}
